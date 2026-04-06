(function () {
    // Configuration
    const PASSWORD = "PCS04";

    // Always show the password prompt — no session caching
    const overlay = document.createElement('div');
    overlay.id = 'password-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#ffffff';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.backdropFilter = 'blur(10px)';

    // Container
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    container.style.padding = '2rem';
    container.style.textAlign = 'center';
    container.style.fontFamily = "'Inter', sans-serif";

    // Build UI
    container.innerHTML = `
        <h2 style="margin-bottom: 1rem; color: #1a1a1a;">Restricted Access</h2>
        <p style="margin-bottom: 2rem; color: #666;">This case study is password protected. Please enter the credentials to view.</p>
        <input type="password" id="password-input" placeholder="Enter Password" style="
            width: 100%;
            padding: 12px;
            margin-bottom: 1rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
        ">
        <button id="submit-btn" style="
            width: 100%;
            padding: 12px;
            background: #1a1a1a;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        ">Verify Access</button>
        <p id="error-msg" style="color: red; margin-top: 1rem; display: none; font-size: 0.9rem;">Incorrect password. Please try again.</p>
        <a href="../index.html" style="display: block; margin-top: 2rem; color: #666; text-decoration: none; font-size: 0.9rem;">← Return to Home</a>
    `;

    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // Disable scrolling while locked
    document.body.style.overflow = 'hidden';

    // Logic
    const input = container.querySelector('#password-input');
    const btn = container.querySelector('#submit-btn');
    const errorMsg = container.querySelector('#error-msg');

    function checkPassword() {
        if (input.value === PASSWORD) {
            overlay.remove();
            document.body.style.overflow = ''; // Restore scrolling
        } else {
            errorMsg.style.display = 'block';
            input.style.borderColor = 'red';
            // shake effect
            input.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-10px)' },
                { transform: 'translateX(10px)' },
                { transform: 'translateX(0)' }
            ], {
                duration: 300
            });
        }
    }

    btn.addEventListener('click', checkPassword);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });

})();
