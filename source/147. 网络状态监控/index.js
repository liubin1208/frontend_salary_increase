function getNetworkInfo() {
  let info;
  if (navigator.onLine) {
    info = {
      type: navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
      downlink: navigator.connection.downlink,
    };
  } else {
    info = {
      type: 'offline',
    };
  }
  return info;
}

function updateInfo() {
  const info = getNetworkInfo();
  const card = document.querySelector('.card');
  if (info.type === 'offline') {
    card.innerHTML = `
    <p><strong>网络状态</strong>离线</p>
    <p><strong>延迟</strong>离线</p>
    <p><strong>带宽</strong>离线</p>
  `;
    card.classList.add('off');
  } else {
    card.innerHTML = `
    <p><strong>网络状态</strong>${info.type}</p>
    <p><strong>延迟</strong>${info.rtt}ms</p>
    <p><strong>带宽</strong>${info.downlink}Mb/s</p>
  `;
    card.classList.remove('off');
  }
}

updateInfo();

window.addEventListener('online', updateInfo);
window.addEventListener('offline', updateInfo);
navigator.connection.addEventListener('change', updateInfo);

setInterval(updateInfo, 1000);
