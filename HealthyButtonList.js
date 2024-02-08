function demandDropDownFunction() {
    const toggleMenus = new Map(); // To store toggle menu pairs

    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        const menu = document.querySelector(`[data-target=${toggle.dataset.path}]`);

        // Store toggle-menu pair
        toggleMenus.set(toggle, menu);

        toggle.addEventListener('click', e => {
            e.stopPropagation(); // Prevent propagation to document click handler
            const targetMenu = toggleMenus.get(toggle);

            toggleMenus.forEach((menu, toggle) => {
                menu.classList.remove('menu-active');
                setTimeout(() => {
                    menu.classList.remove('open');
                }, 0);
            });

            if (!targetMenu.classList.contains('open')) {
                targetMenu.classList.add('menu-active');
                setTimeout(() => {
                    targetMenu.classList.add('open');
                }, 0);
            } else {
                targetMenu.classList.remove('menu-active');
                setTimeout(() => {
                    targetMenu.classList.remove('open');
                }, 0);
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', e => {
        const clickedElement = e.target;
        toggleMenus.forEach((menu, toggle) => {
            if (toggle === clickedElement || menu.contains(clickedElement)) {
                return;
            }
            menu.classList.remove('menu-active');
            setTimeout(() => {
                menu.classList.remove('open');
            }, 0);
        });
    });
}

demandDropDownFunction();