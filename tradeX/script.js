// Sample stock data
const stocks = [
    { symbol: "RELIANCE", name: "Reliance Industries Ltd", price: 2456.75, change: 12.50, changePercent: 0.51, volume: 2543678 },
    { symbol: "TCS", name: "Tata Consultancy Services", price: 3250.25, change: -25.75, changePercent: -0.79, volume: 1876543 },
    { symbol: "INFY", name: "Infosys Ltd", price: 1520.50, change: 8.25, changePercent: 0.55, volume: 3245678 },
    { symbol: "HDFC", name: "HDFC Bank Ltd", price: 1450.80, change: 5.60, changePercent: 0.39, volume: 4123456 },
    { symbol: "SBIN", name: "State Bank of India", price: 550.45, change: -2.35, changePercent: -0.43, volume: 5678901 },
    { symbol: "ICICIBANK", name: "ICICI Bank Ltd", price: 920.60, change: 15.25, changePercent: 1.68, volume: 3124567 },
    { symbol: "BHARTIARTL", name: "Bharti Airtel Ltd", price: 780.30, change: -8.45, changePercent: -1.07, volume: 2345678 },
    { symbol: "ITC", name: "ITC Ltd", price: 420.15, change: 3.20, changePercent: 0.77, volume: 1890345 }
];

// Portfolio and user data
let portfolio = {
    totalValue: 125000.00,
    todaysPL: 2500.00,
    totalInvestment: 122500.00,
    availableBalance: 15000.00
};

let orders = [
    { id: 1, date: "2024-01-15", symbol: "RELIANCE", type: "buy", quantity: 5, price: 2420.00, status: "completed" },
    { id: 2, date: "2024-01-14", symbol: "TCS", type: "sell", quantity: 3, price: 3280.00, status: "completed" },
    { id: 3, date: "2024-01-14", symbol: "INFY", type: "buy", quantity: 10, price: 1505.00, status: "completed" }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeStockList();
    initializeStockSelect();
    updatePortfolioDisplay();
    initializeOrders();
    
    // Simulate real-time updates every 3 seconds
    setInterval(updateStockPrices, 3000);
});

// Initialize stock list
function initializeStockList() {
    const stockListContainer = document.getElementById('stockList');
    stockListContainer.innerHTML = '';
    
    stocks.forEach(stock => {
        const stockItem = createStockItem(stock);
        stockListContainer.appendChild(stockItem);
    });
}

// Create stock item element
function createStockItem(stock) {
    const stockItem = document.createElement('div');
    stockItem.className = 'stock-item';
    stockItem.id = `stock-${stock.symbol}`;
    
    const changeClass = stock.change >= 0 ? 'price-up' : 'price-down';
    const changeSign = stock.change >= 0 ? '+' : '';
    
    stockItem.innerHTML = `
        <div>
            <div class="stock-name">${stock.name}</div>
            <div class="stock-symbol">${stock.symbol}</div>
        </div>
        <div>₹${stock.price.toFixed(2)}</div>
        <div class="${changeClass}">${changeSign}${stock.change.toFixed(2)}</div>
        <div class="${changeClass}">${changeSign}${stock.changePercent.toFixed(2)}%</div>
        <div>${(stock.volume / 1000).toFixed(0)}K</div>
        <div>
            <button class="trade-btn" onclick="selectStock('${stock.symbol}', ${stock.price})">Trade</button>
        </div>
    `;
    
    return stockItem;
}

// Initialize stock select dropdown
function initializeStockSelect() {
    const stockSelect = document.getElementById('stockSelect');
    stockSelect.innerHTML = '';
    
    stocks.forEach(stock => {
        const option = document.createElement('option');
        option.value = stock.symbol;
        option.textContent = `${stock.name} (${stock.symbol})`;
        stockSelect.appendChild(option);
    });
}

// Filter stocks based on search and filter criteria
function filterStocks() {
    const searchTerm = document.getElementById('searchStocks').value.toLowerCase();
    const filterChange = document.getElementById('filterChange').value;
    
    const filteredStocks = stocks.filter(stock => {
        const matchesSearch = stock.name.toLowerCase().includes(searchTerm) || 
                            stock.symbol.toLowerCase().includes(searchTerm);
        
        let matchesFilter = true;
        if (filterChange === 'gainers') {
            matchesFilter = stock.change > 0;
        } else if (filterChange === 'losers') {
            matchesFilter = stock.change < 0;
        }
        
        return matchesSearch && matchesFilter;
    });
    
    const stockListContainer = document.getElementById('stockList');
    stockListContainer.innerHTML = '';
    
    filteredStocks.forEach(stock => {
        const stockItem = createStockItem(stock);
        stockListContainer.appendChild(stockItem);
    });
}

// Select stock for trading
function selectStock(symbol, price) {
    document.getElementById('stockSelect').value = symbol;
    document.getElementById('price').value = price.toFixed(2);
    calculateTotal();
    showTradingPanel();
}

// Update stock price when selection changes
function updateStockPrice() {
    const symbol = document.getElementById('stockSelect').value;
    const stock = stocks.find(s => s.symbol === symbol);
    
    if (stock) {
        document.getElementById('price').value = stock.price.toFixed(2);
        calculateTotal();
    }
}

// Toggle price field based on order type
function togglePriceField() {
    const orderType = document.getElementById('orderType').value;
    const priceInput = document.getElementById('price');
    
    if (orderType === 'market') {
        priceInput.placeholder = 'Market Price';
        priceInput.disabled = true;
        const symbol = document.getElementById('stockSelect').value;
        const stock = stocks.find(s => s.symbol === symbol);
        if (stock) {
            priceInput.value = stock.price.toFixed(2);
        }
    } else {
        priceInput.placeholder = 'Enter limit price';
        priceInput.disabled = false;
    }
    calculateTotal();
}

// Calculate total amount
function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const price = parseFloat(document.getElementById('price').value) || 0;
    const total = quantity * price;
    
    document.getElementById('totalAmount').value = `₹${total.toFixed(2)}`;
}

// Place buy/sell order
function placeOrder(type) {
    const symbol = document.getElementById('stockSelect').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value) || 0;
    const orderType = document.getElementById('orderType').value;
    
    if (!symbol || quantity <= 0) {
        showNotification('Please fill all fields correctly', 'error');
        return;
    }
    
    const stock = stocks.find(s => s.symbol === symbol);
    const totalValue = quantity * (price || stock.price);
    
    if (type === 'buy' && totalValue > portfolio.availableBalance) {
        showNotification('Insufficient balance for this trade', 'error');
        return;
    }
    
    const action = type === 'buy' ? 'Buy' : 'Sell';
    const orderDetails = `${action} ${quantity} shares of ${symbol} at ₹${price || 'Market'}`;
    
    if (confirm(`Confirm Order:\n${orderDetails}\nTotal: ₹${totalValue.toFixed(2)}`)) {
        // Create new order
        const newOrder = {
            id: orders.length + 1,
            date: new Date().toISOString().split('T')[0],
            symbol: symbol,
            type: type,
            quantity: quantity,
            price: price || stock.price,
            status: 'pending'
        };
        
        orders.unshift(newOrder);
        
        // Update portfolio
        if (type === 'buy') {
            portfolio.availableBalance -= totalValue;
            portfolio.totalInvestment += totalValue;
        } else {
            portfolio.availableBalance += totalValue;
        }
        
        updatePortfolioDisplay();
        initializeOrders();
        showNotification(`Order placed successfully!`, 'success');
        hideTradingPanel();
    }
}

// Show trading panel
function showTradingPanel() {
    document.getElementById('tradingPanel').style.display = 'block';
    calculateTotal();
}

// Hide trading panel
function hideTradingPanel() {
    document.getElementById('tradingPanel').style.display = 'none';
}

// Show portfolio (placeholder)
function showPortfolio() {
    showNotification('Portfolio feature coming soon!', 'info');
}

// Show orders (placeholder)
function showOrders() {
    document.getElementById('orderHistory').scrollIntoView({ behavior: 'smooth' });
}

// Initialize orders list
function initializeOrders() {
    const ordersContainer = document.getElementById('ordersContainer');
    ordersContainer.innerHTML = '';
    
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<div class="order-item">No orders found</div>';
        return;
    }
    
    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = `order-item ${order.type === 'buy' ? 'order-buy' : 'order-sell'}`;
        
        orderItem.innerHTML = `
            <div>${order.date}</div>
            <div>${order.symbol}</div>
            <div><span class="${order.type === 'buy' ? 'price-up' : 'price-down'}">${order.type.toUpperCase()}</span></div>
            <div>${order.quantity}</div>
            <div>₹${order.price.toFixed(2)}</div>
            <div class="status-${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</div>
        `;
        
        ordersContainer.appendChild(orderItem);
    });
}

// Update portfolio display
function updatePortfolioDisplay() {
    document.getElementById('portfolioValue').textContent = `₹${portfolio.totalValue.toFixed(2)}`;
    document.getElementById('todayPL').textContent = `${portfolio.todaysPL >= 0 ? '+' : ''}₹${portfolio.todaysPL.toFixed(2)}`;
    document.getElementById('todayPL').className = portfolio.todaysPL >= 0 ? 'price-up' : 'price-down';
    document.getElementById('totalInvestment').textContent = `₹${portfolio.totalInvestment.toFixed(2)}`;
    document.getElementById('availableBalance').textContent = `₹${portfolio.availableBalance.toFixed(2)}`;
}

// Simulate real-time stock price updates
function updateStockPrices() {
    stocks.forEach(stock => {
        // Simulate small price changes
        const randomChange = (Math.random() - 0.5) * 5;
        const newPrice = Math.max(1, stock.price + randomChange);
        const change = newPrice - (stock.price - stock.change); // Maintain consistent change calculation
        const changePercent = (change / (newPrice - change)) * 100;
        
        stock.price = newPrice;
        stock.change = change;
        stock.changePercent = changePercent;
        stock.volume += Math.floor(Math.random() * 10000) - 5000;
    });
    
    // Update portfolio value with simulated changes
    const randomPL = (Math.random() - 0.5) * 200;
    portfolio.todaysPL += randomPL;
    portfolio.totalValue = portfolio.totalInvestment + portfolio.todaysPL;
    
    updatePortfolioDisplay();
    
    // Update stock list display
    stocks.forEach(stock => {
        const stockElement = document.getElementById(`stock-${stock.symbol}`);
        if (stockElement) {
            const changeClass = stock.change >= 0 ? 'price-up' : 'price-down';
            const changeSign = stock.change >= 0 ? '+' : '';
            
            stockElement.innerHTML = `
                <div>
                    <div class="stock-name">${stock.name}</div>
                    <div class="stock-symbol">${stock.symbol}</div>
                </div>
                <div>₹${stock.price.toFixed(2)}</div>
                <div class="${changeClass}">${changeSign}${stock.change.toFixed(2)}</div>
                <div class="${changeClass}">${changeSign}${stock.changePercent.toFixed(2)}%</div>
                <div>${(stock.volume / 1000).toFixed(0)}K</div>
                <div>
                    <button class="trade-btn" onclick="selectStock('${stock.symbol}', ${stock.price})">Trade</button>
                </div>
            `;
        }
    });
}

// Show notification
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 6px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = '#38a169';
    } else if (type === 'error') {
        notification.style.background = '#e53e3e';
    } else {
        notification.style.background = '#667eea';
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);