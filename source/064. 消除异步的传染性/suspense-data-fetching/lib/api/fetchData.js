import wrapPromise from './wrapPromise'

function fetchData(url) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise(promise)
}

export function getTodos() {
  return fetchData(
    'https://run.mocky.io/v3/8a33e687-bc2f-41ea-b23d-3bc2fb452ead'
  )
}

export function getUser() {
  return fetchData(
    'https://run.mocky.io/v3/d6ac91ac-6dab-4ff0-a08e-9348d7deed51'
  )
}
