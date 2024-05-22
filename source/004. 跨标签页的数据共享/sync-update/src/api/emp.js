function generateId() {
  return Date.now() + Math.random().toString(36).substring(2, 7);
}

function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
let emps;

function initEmps() {
  if (localStorage.__emps) {
    emps = JSON.parse(localStorage.__emps);
  } else {
    emps = new Array(10).fill(0).map((it, i) => ({
      id: generateId(),
      name: `name${i}`,
      salary: getRandom(3000, 50000),
      sex: getRandom(0, 1),
      age: getRandom(22, 50),
    }));
    saveEmps();
  }
}

function saveEmps() {
  localStorage.__emps = JSON.stringify(emps);
}

initEmps();

export async function getEmployees() {
  await delay(getRandom(100, 3000));
  return emps;
}

export async function addEmployee(emp) {
  await delay(getRandom(100, 3000));
  emp.id = generateId();
  emps.unshift(emp);
  saveEmps();
  return emp;
}

export async function getEmployee(id) {
  await delay(getRandom(100, 3000));
  return emps.find((it) => it.id === id);
}

export async function deleteEmployee(id) {
  await delay(getRandom(100, 3000));
  emps = emps.filter((it) => it.id !== id);
  saveEmps();
}

export async function updateEmployee(emp) {
  await delay(getRandom(100, 3000));
  const newEmps = [];
  for (const e of emps) {
    if (e.id === emp.id) {
      newEmps.push(emp);
    } else {
      newEmps.push(e);
    }
  }
  emps = newEmps;
  saveEmps();
  return newEmps;
}
