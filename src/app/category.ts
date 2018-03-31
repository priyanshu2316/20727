export class Category {
    constructor(
        public category: string ,
        public padmin: string,
        public solved: number,
        public unsolved: number
        
    ){}
    public getsolved()
    {
        return this.solved;
    }
}
