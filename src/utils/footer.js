export const footerItem = (buttonText = "Talk to us", combo_class) => {
  const footer = document.createElement('footer');
  footer.classList.add('footer-area');
  const button = document.createElement('button');
  button.textContent = `${buttonText}`;
  button.classList.add(`${combo_class}`);

  footer.appendChild(button);

  return footer
};