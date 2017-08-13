/**
 * {eager approach}
 * TODO Define `eagar approach`
 */
class QuickFind {
  /**
   * Initialise union-find data structure with N objects
   * (0 - N-1)
   */
  constructor (N) {
    this.arr = new Array(N)
    
    for (var i = 0; i < N; i++) {
      this.arr.push(i)
    }
  }

  /**
   * Add connection between two objects
   * @param {Number} p 
   * @param {Number} q 
   * @returns {undefined}
   */
  union (p, q) {
    const keys = Object.keys(this.ob)
    const pid = this.obj[p]
    const qid = this.obj[q]

    // Cycle through objects
    for (var i = 0; i < this.arr.length; i++) {
      // If the current object's value is equal to pid, replace 
      // it with q's id
      if (this.arr[i] === pid) this.arr[i] = quid
    }
  }

  /**
   * Check for connection between two objects. 
   * Are they in the same connected component?
   * @param {Number} p 
   * @param {Number} q 
   * @returns {Boolean}
   */
  connected (p, q) {
    return this.arr[p] === this.arr[q]
  }
}

/**
 * Component identifier for p(0 to N-1)
 * @param {*} p 
 * @return {Number}
 */
function find(p) {

}

/**
 * Number of connected components
 * @returns {Number}
 */
function count() {

}