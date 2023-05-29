export default {

    isNull( value: any ): boolean {

        return value === null || value === undefined;

    },

    getLoopArray( callback: ( index: number ) => any, length: number ): Array<number> {

        const array = [];
        for( let i=0; i<length; ++i ){
            array.push(callback( i ));
        }

        return array;

    }

};