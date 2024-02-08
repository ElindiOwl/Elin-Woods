function demandDropDownFunction() {
    let intervalid;

    document.querySelectorAll('.dropdown-toggle').forEach(e => {
        forDropDownMenu(e);
    });

    function forDropDownMenu(toggle) {
        toggle.addEventListener('click', e => {
            const menu = e.currentTarget.dataset.path;
            document.querySelectorAll('.dropdown-menu').forEach(e => {
                if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                    e.classList.remove('menu-active');
                    e.classList.remove('open');
                    document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                    intervalid = setTimeout(() => {
                        document.querySelector(`[data-target=${menu}]`).classList.add('open');
                    }, 0);
                }

                if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                    clearTimeout(intervalid);
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    intervalid = setTimeout(() => {
                        document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                    }, 0);
                }

                window.onclick = e => {
                    if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                        return;
                    }
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }
            });
        });
    }
}

let intervalid;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    forDropDownMenu(e);
});

function forDropDownMenu(toggle) {
    toggle.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalid = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalid);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalid = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                }
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                document.querySelector(`[data-target=${menu}]`).classList.remove('open');
            }
        });
    });
}