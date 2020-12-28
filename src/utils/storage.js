/**
 * Storage
 */

class Storage {
    get(name) {
        return localStorage.getItem(name)
    }

    set(name, value) {
        return localStorage.setItem(name, value)
    }

    remove(name) {
        return localStorage.removeItem(name)
    }

    clear() {
        return localStorage.clear()
    }
}

export default new Storage()
