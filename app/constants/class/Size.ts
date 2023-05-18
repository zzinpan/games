export default class Size {

    private width: number = 0;
    private height: number = 0;

    constructor( width: number = 0, height: number = 0 ) {
        this.set( width, height );
    }

    public set( width: number = this.width, height: number = this.height ): this {
        this.width = width;
        this.height = height;
        return this;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

}