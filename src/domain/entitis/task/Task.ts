import { v4 } from "uuid";
import { type Replace } from "../../../helpers/Replace";

export interface ITask {
    title: string,
    description: string,
    deadline: Date,
    creatorId: string,
    responsibleId: string
}

export class Task {
    private readonly _id: string;
    private readonly props: ITask;

    constructor(props: Replace<ITask, {
        responsibleId: string
    }>, id?: string) {
        this._id = id ?? v4();
        this.props = {
            ...props,
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

    get creatorId() {
        return this.props.creatorId;
    }

    get responsibleId() {
        return this.props.responsibleId;
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

    set creatorId(value: string) {
        this.props.creatorId = value;
    }

    set responsibleId(value: string) {
        this.props.responsibleId = value;
    }
}