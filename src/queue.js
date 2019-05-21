import Utils from './utils'

class PositionQueue {
    constructor() {
        this.max_length = 10;
        this._queue = [];
    }

    insert(positions) {
        if (this._queue.length > this.max_length) {
            this._queue.shift();
        }

        this._queue.push({
            mapped: positions.reduce((acc, val) => {
                acc[val.lines + '__' + val.brigade] = val;
                return acc;
            }, {})
        });

        // calculate heading
        if (this._queue.length > 1) {
            let last = this.last().mapped;
            let beforelast = this.beforelast().mapped;

            for (let key in last) {
                if (beforelast[key] !== undefined && beforelast[key].time !== last[key].time) {
                    let p0 = {lat: beforelast[key].lat, lng: beforelast[key].lng};
                    let p1 = {lat: last[key].lat, lng: last[key].lng};
                    last[key].heading = Utils.getDegreesFromLatLngVec(p0, p1);
                } else {
                    last[key].heading = beforelast[key] !== undefined ? beforelast[key].heading : null;
                }
            }
        }
    }

    last() {
        return this._queue[this._queue.length - 1];
    }

    lastarray() {
        if (this._queue.length > 0) {
            return Object.values(this.last().mapped);
        }
        return [];
    }

    beforelast() {
        return this._queue[this._queue.length - 2];
    }
}

const queue = new PositionQueue();

export default queue;