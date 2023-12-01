"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectManipulator = void 0;
class ObjectManipulator {
    constructor(obj) {
        this.obj = obj;
    }
    set(key, value) {
        return new ObjectManipulator({ ...this.obj, [key]: value });
    }
    get(key) {
        return this.obj[key];
    }
    delete(key) {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }
    getObject() {
        return this.obj;
    }
}
exports.ObjectManipulator = ObjectManipulator;
