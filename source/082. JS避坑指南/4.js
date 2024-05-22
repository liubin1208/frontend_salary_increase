const STATETYPE = {
  NORMAL: 1,
  VIP: 2,
  SUPER_VIP: 3,
};

// component1.js
if (state === STATETYPE.NORMAL || state === STATETYPE.VIP) {
  // ...
} else if (state === 3) {
  // ...
}
// component2.js
if (state === 1 || state === 2) {
  // ...
}

node.nodeType === Node.ELEMENT_NODE;
