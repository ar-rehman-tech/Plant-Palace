// ── Plant Data ──────────────────────────────────────────────
const plants = [
    {
        id: 0, name: "Monstera Deliciosa", price: 49.99,
        image: "https://growurban.uk/cdn/shop/articles/care-guide-monstera-deliciosa-668092_680bbf00-9564-4f0c-b9cb-27ededaf19d2.jpg?v=1748436514&width=2048",
        description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a tropical plant known for its large, glossy leaves with natural holes. A popular choice for indoor gardens due to its striking appearance and relatively easy care.",
        care: "Water every 1-2 weeks, allowing soil to dry out between waterings. Thrives in bright, indirect light. Prefers temperatures between 65-85°F and humidity above 50%.",
        origin: "Central America", category: "indoor"
    },
    {
        id: 1, name: "Snake Plant", price: 34.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX2HyD4P4IyQM_JtM8baUPIHCrhck_dqL0A&s",
        description: "The Snake Plant, also known as Mother-in-Law's Tongue, is a hardy succulent with tall, upright variegated leaves. Renowned for its air-purifying qualities and ability to thrive in low light.",
        care: "Water every 2-3 weeks, allowing soil to dry completely between waterings. Tolerates low light but prefers indirect sunlight. Ideal temperature range 70-90°F.",
        origin: "West Africa", category: "indoor"
    },
    {
        id: 2, name: "Fiddle Leaf Fig", price: 59.99,
        image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-e1652800894846.jpg?ver=279577",
        description: "The Fiddle Leaf Fig is a popular indoor tree with large, violin-shaped leaves. A dramatic statement in any room, favored by interior designers for its architectural form and lush foliage.",
        care: "Water weekly, keeping soil consistently moist but not soggy. Needs bright, indirect light. Prefers temperatures 65-75°F and moderate to high humidity.",
        origin: "Western Africa", category: "indoor"
    },
    {
        id: 3, name: "Peace Lily", price: 39.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jX-SEP0a64nJ_3Y-wUYzuCWBvSSO_ZbzoQ&s",
        description: "The Peace Lily is a graceful plant with dark green leaves and elegant white flowers. Known for its air-purifying capabilities and ability to bloom in lower light conditions.",
        care: "Water weekly, keeping soil consistently moist. Prefers low to medium indirect light. Thrives in temperatures 65-80°F and high humidity.",
        origin: "South America", category: "flowering"
    },
    {
        id: 4, name: "Aloe Vera", price: 24.99,
        image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/04/aloe-vera-GettyImages-1473547826-Thumb.jpg",
        description: "Aloe Vera is a succulent plant known for its medicinal properties. The thick, fleshy leaves contain a gel used to treat burns and skin irritations. Also an attractive, low-maintenance houseplant.",
        care: "Water every 3 weeks, allowing soil to dry completely. Needs bright, direct light. Prefers temperatures 55-80°F and low humidity.",
        origin: "Arabian Peninsula", category: "succulent"
    },
    {
        id: 5, name: "ZZ Plant", price: 44.99,
        image: "https://libertylandscapesupply.com/cdn/shop/files/zz-plant-scaled.jpg?v=1731513272&width=1214",
        description: "The ZZ Plant is an incredibly durable houseplant with glossy, dark green leaves. Known for tolerating low light and irregular watering — excellent for beginners.",
        care: "Water every 2-3 weeks, allowing soil to dry completely. Tolerates low light but grows faster in bright, indirect light. Prefers temperatures 65-75°F.",
        origin: "Eastern Africa", category: "indoor"
    },
    {
        id: 6, name: "Rubber Plant", price: 54.99,
        image: "https://www.leafenvy.co.uk/cdn/shop/files/RubberPlantFamily-014.jpg?v=1751962727",
        description: "The Rubber Plant is a popular indoor tree with large, glossy leaves in deep green or burgundy. A fast-growing plant that makes a dramatic statement with its bold foliage and upright growth habit.",
        care: "Water every 1-2 weeks, allowing soil to dry out between waterings. Prefers bright, indirect light. Thrives in temperatures 60-80°F and moderate humidity.",
        origin: "Southeast Asia", category: "indoor"
    },
    {
        id: 7, name: "Bird of Paradise", price: 79.99,
        image: "https://www.mapro.com/cdn/shop/articles/bird-of-paradise-mapro.jpg?v=1739768854&width=1500",
        description: "The Bird of Paradise is a stunning tropical plant with large, banana-like leaves and spectacular flowers resembling exotic birds. Makes a dramatic statement and brings a touch of the tropics indoors.",
        care: "Water every 1-2 weeks, allowing soil to dry out. Needs bright, direct light. Prefers temperatures 65-85°F and high humidity.",
        origin: "South Africa", category: "flowering"
    },
    {
        id: 8, name: "Pothos", price: 29.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-L3zJKPpq8HmhyXMg4kaltqI9odHj7Qq2_9xuAHNB3Bhoer7YpcjuFLoKmFWpyYm5cvM&usqp=CAU",
        description: "Pothos is a trailing vine with heart-shaped leaves in various variegated patterns. One of the easiest houseplants to grow — excellent for hanging baskets or training to climb a trellis.",
        care: "Water every 1-2 weeks, allowing soil to dry out. Tolerates low light but thrives in medium indirect light. Prefers temperatures 65-85°F.",
        origin: "French Polynesia", category: "indoor"
    },
    {
        id: 9, name: "Lavender", price: 32.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtMjGprtI23PQFwmSGW4aOxi6aYDC5AYLaQ&s",
        description: "Lavender is a fragrant flowering plant known for its beautiful purple blooms and calming scent. Perfect for outdoor gardens and useful for culinary purposes, aromatherapy, and crafting.",
        care: "Water every 1-2 weeks, allowing soil to dry between waterings. Requires full sun. Prefers well-draining soil and temperatures 60-75°F.",
        origin: "Mediterranean", category: "outdoor"
    },
    {
        id: 10, name: "Tomato Plant", price: 19.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlbTNaToLYUNUvQZD0ZZKuUHdKyxxOgnThA&s",
        description: "Grow your own juicy tomatoes with this productive plant. Perfect for gardens or large containers, it will provide fresh, flavorful tomatoes throughout the growing season.",
        care: "Water regularly, keeping soil consistently moist. Needs full sun (6-8 hours daily). Prefers temperatures 65-85°F. Support with stakes or cages as it grows.",
        origin: "South America", category: "outdoor"
    },
    {
        id: 11, name: "Rose Bush", price: 45.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX-X_HoEvw-Z8prLIlG_hiB2bCZyqvyuNuA&s",
        description: "This beautiful rose bush produces stunning, fragrant blooms throughout the growing season. With proper care it becomes a centerpiece of your garden, providing cut flowers for your home.",
        care: "Water deeply 2-3 times per week. Requires full sun. Prune in early spring. Prefers temperatures 60-75°F. Fertilize monthly during growing season.",
        origin: "Asia", category: "outdoor"
    }
];

// ── Cart Utilities ────────────────────────────────────────────
function getCart() {
    try {
        const data = localStorage.getItem('plantPalaceCart');
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem('plantPalaceCart', JSON.stringify(cart));
    } catch (e) {
        console.error('Error saving cart:', e);
    }
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function addToCart(plantId, quantity = 1) {
    const qty = parseInt(quantity) || 1;
    if (qty < 1) return;
    const cart = getCart();
    const plant = plants.find(p => p.id === plantId);
    if (!plant) return;
    const existing = cart.find(i => i.id === plantId);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({
            id: plant.id,
            name: plant.name,
            price: plant.price,
            image: plant.image,
            quantity: qty
        });
    }
    saveCart(cart);
    updateNavCartCount();
    showToast(plant.name + ' added to cart! 🛒');
}

function updateNavCartCount() {
    const count = getCartCount();
    const countElements = document.querySelectorAll('.cart-count');
    countElements.forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
}

function showToast(msg) {
    let toast = document.getElementById('pp-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'pp-toast';
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(14px)';
    }, 2800);
}

// ── Navbar Builder ────────────────────────────────────────────
function buildNavbar(activePage) {
    const pages = [
        { id: 'home',     label: 'Home',     href: 'index.html' },
        { id: 'catalog',  label: 'Catalog',  href: 'catalog.html' },
        { id: 'about',    label: 'About',    href: 'about.html' },
        { id: 'contact',  label: 'Contact',  href: 'contact.html' },
        { id: 'feedback', label: 'Feedback', href: 'feedback.html' }
    ];
    const links = pages.map(p =>
        '<li class="nav-item">' +
            '<a class="nav-link' + (p.id === activePage ? ' active' : '') + '" href="' + p.href + '">' + p.label + '</a>' +
        '</li>'
    ).join('');
    const count = getCartCount();
    const countStyle = count > 0 ? 'display:flex;' : 'display:none;';
    const isCartActive = activePage === 'cart';

    return '<header class="navbar-custom">' +
      '<nav class="navbar-container" aria-label="Main Navigation">' +
        '<a class="navbar-brand" href="index.html">' +
          '<i class="fas fa-leaf" aria-hidden="true"></i> PlantPalace' +
        '</a>' +
        '<div class="navbar-right">' +
          '<div class="mobile-cart-wrap">' +
            '<a href="cart.html" class="cart-icon-btn' + (isCartActive ? ' active' : '') + '" aria-label="Shopping Cart">' +
              '<i class="fas fa-shopping-cart" aria-hidden="true"></i>' +
              '<span class="cart-count" style="' + countStyle + '">' + count + '</span>' +
            '</a>' +
          '</div>' +
          '<button class="navbar-toggler" id="navbarTogglerBtn" onclick="toggleNav()" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="navbarCollapse">' +
            '<i class="fas fa-bars" id="navbarTogglerIcon" aria-hidden="true"></i>' +
          '</button>' +
        '</div>' +
        '<div class="navbar-collapse" id="navbarCollapse">' +
          '<ul class="navbar-nav">' + links + '</ul>' +
          '<div class="desktop-cart-wrap" style="margin-left: 14px;">' +
            '<a href="cart.html" class="cart-icon-btn' + (isCartActive ? ' active' : '') + '" aria-label="Shopping Cart">' +
              '<i class="fas fa-shopping-cart" aria-hidden="true"></i>' +
              '<span class="cart-count" style="' + countStyle + '">' + count + '</span>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</nav>' +
    '</header>';
}

function toggleNav() {
    const nav = document.getElementById('navbarCollapse');
    const btn = document.getElementById('navbarTogglerBtn');
    const icon = document.getElementById('navbarTogglerIcon');
    if (!nav) return;
    const isShowing = nav.classList.contains('show');
    if (isShowing) {
        nav.classList.remove('show');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
    } else {
        nav.classList.add('show');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-times'); }
    }
}

function closeNav() {
    const nav = document.getElementById('navbarCollapse');
    const btn = document.getElementById('navbarTogglerBtn');
    const icon = document.getElementById('navbarTogglerIcon');
    if (nav && nav.classList.contains('show')) {
        nav.classList.remove('show');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
    }
}

// ── Footer Builder ────────────────────────────────────────────
function buildFooter() {
    return '<footer>' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-col">' +
            '<h3>PlantPalace</h3>' +
            '<p>Bringing nature\'s beauty to your home with the highest quality plants and expert guidance.</p>' +
            '<div class="social-icons" aria-label="Social Media Links">' +
              '<a href="javascript:void(0)" onclick="showToast(\'Connecting to Facebook...\')" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>' +
              '<a href="javascript:void(0)" onclick="showToast(\'Connecting to Twitter...\')" aria-label="Twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>' +
              '<a href="javascript:void(0)" onclick="showToast(\'Connecting to Instagram...\')" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>' +
              '<a href="javascript:void(0)" onclick="showToast(\'Connecting to Pinterest...\')" aria-label="Pinterest"><i class="fab fa-pinterest" aria-hidden="true"></i></a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-col footer-links">' +
            '<h5>Quick Links</h5>' +
            '<ul>' +
              '<li><a href="index.html">Home</a></li>' +
              '<li><a href="catalog.html">Shop Plants</a></li>' +
              '<li><a href="about.html">About Us</a></li>' +
              '<li><a href="contact.html">Contact Us</a></li>' +
              '<li><a href="feedback.html">Customer Feedback</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col footer-links">' +
            '<h5>Categories</h5>' +
            '<ul>' +
              '<li><a href="catalog.html?cat=indoor">Indoor Plants</a></li>' +
              '<li><a href="catalog.html?cat=outdoor">Outdoor Plants</a></li>' +
              '<li><a href="catalog.html?cat=succulent">Succulents</a></li>' +
              '<li><a href="catalog.html?cat=flowering">Flowering Plants</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col footer-links">' +
            '<h5>Newsletter</h5>' +
            '<p style="font-size:0.88rem;margin-bottom:12px;">Subscribe for plant care tips and exclusive offers.</p>' +
            '<form class="newsletter-form" onsubmit="handleNewsletter(event)">' +
              '<input type="email" id="newsletterEmail" placeholder="Your Email Address" required aria-label="Email for Newsletter">' +
              '<button type="submit" class="btn-primary">Subscribe</button>' +
            '</form>' +
          '</div>' +
        '</div>' +
        '<hr>' +
        '<p class="copy">© 2025 PlantPalace. All rights reserved.</p>' +
      '</div>' +
    '</footer>';
}

function handleNewsletter(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('newsletterEmail');
    if (input && input.value.trim()) {
        showToast('Thanks for subscribing! 🌿');
        input.value = '';
    }
}

// ── Global Initializer ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    updateNavCartCount();

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        const nav = document.getElementById('navbarCollapse');
        const toggler = document.getElementById('navbarTogglerBtn');
        if (nav && nav.classList.contains('show')) {
            if (!nav.contains(e.target) && (!toggler || !toggler.contains(e.target))) {
                closeNav();
            }
        }
    });

    // Close mobile nav when clicking a nav link
    document.addEventListener('click', (e) => {
        if (e.target.closest('.navbar-nav .nav-link')) {
            closeNav();
        }
    });

    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            closeNav();
        }
    });
});
