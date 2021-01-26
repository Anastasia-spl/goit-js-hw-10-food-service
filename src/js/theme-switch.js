const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const toggleInputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const chosenTheme = localStorage.getItem('colorTheme');

if (chosenTheme === Theme.DARK) {
    toggleInputRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
}

toggleInputRef.addEventListener('change', onThemeToggling);

function onThemeToggling(event) {
    if (event.currentTarget.checked) {
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('colorTheme', Theme.DARK);

    } else {
        bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('colorTheme', Theme.LIGHT);
    }
}




