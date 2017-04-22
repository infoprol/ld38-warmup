import 'phaser'

export default function (params, game) {
  const keys = []
  const events = {}
  let ctrl = {}
  for (const k of params) {
    let key = Object.assign(k, {phaserKey: game.input.keyboard.addKey(k.key)})
    keys.push(key)

    let [u, d] = [`${k.name}UP`, `${k.name}DOWN`]
    events[u] = new Event(u)
    events[d] = new Event(d)

    ctrl[k.name] = (p, r) => {
      document.addEventListener(d, p)
      document.addEventListener(u, r)
    }

    ctrl.update = () => {
      for (const k of keys) {
        if (k.phaserKey.isDown) {
          document.dispatchEvent(events[d])
        } else if (k.phaserKey.isUp) {
          document.dispatchEvent(events[u])
        }
      }
    }
  }

  return ctrl
}
