export class ObjectManipulator {

    constructor(protected obj: {[key: string]: number}) {}

    public set(key: string, value: number): ObjectManipulator {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): number {
        return this.obj[key];
    }

    public delete(key: string): ObjectManipulator {
        const newObj: {[key: string]: number} = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): {[key: string]: number} {
        return this.obj;
    }
}