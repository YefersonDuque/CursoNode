export class UpdateTodoDto {

    private constructor(
        public readonly id?: number,
        public readonly text?: string,
        public readonly completedAt?: Date
    ) { }

    get values() {
        const returObj: { [key: string]: any } = {};

        if (this.text) returObj.text = this.text;
        if (this.completedAt) returObj.completedAt = this.completedAt;

        return returObj;

    }

    static update(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
        const { id, text, completedAt } = props;
        let newCompletedAt = completedAt;
        if (!id || isNaN(Number(id))) {
            return ['Id must be a valid number']
        }
        if (completedAt) {
            newCompletedAt = new Date(completedAt)
            if (newCompletedAt.toDateString() === 'Invalid Date') {
                return ['CompletedAt must de a valid date']
            }
        }

        return [undefined, new UpdateTodoDto(id, text, newCompletedAt)]
    }
}