import { v4 } from "uuid";
import { Replace } from "../../../helpers/Replace";
import { User } from "./User";

export interface ITask {
    title: string,
    description: string,
    deadline: Date,
    creator: User,
    responsible: User[]
}

export class Task {
    private _id: string;
    private props: ITask;

    constructor(props: Replace<ITask, {
        responsible?: User[]
    }>, id?: string) {
        this._id = id ?? v4();
        this.props = {
            ...props,
            responsible: props.responsible || []
        };
    }

    get id() {
        return this._id;
    }

    get title() {
        return this.props.title;
    }

    get description() {
        return this.props.description;
    }

    get deadline() {
        return this.props.deadline;
    }

    get creator() {
        return this.props.creator;
    }

    get responsible() {
        return this.props.responsible;
    }

    set title(value: string) {
        this.props.title = value;
    }

    set description(value: string) {
        this.props.description = value;
    }

    set deadline(value: Date) {
        this.props.deadline = value;
    }

    set creator(value: User) {
        this.props.creator = value;
    }

    set responsible(value: User[]) {
        this.props.responsible = value;
    }
}