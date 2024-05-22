function copyText(text) {
  if (navigator.clipboard) {
    copyText = (text) => {
      navigator.clipboard.writeText(text);
    };
  } else {
    copyText = (text) => {
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    };
  }
  copyText(text);
}
