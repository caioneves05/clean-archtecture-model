import { type Replace } from "../../../helpers/Replace";

import { v4 } from "uuid";
import { type Task } from "./Task";
import { cnpj, cpf } from "cpf-cnpj-validator";

export interface IUser {
    fullname: string;
    document: string;
    email: string;
    role: 'admin' | 'user';
    tasksId?: string[];
}

export class User {
    private readonly _id: string;
    private readonly props: IUser;

    constructor(props: Replace<IUser, {
        tasks?: Task[]
    }>, id?: string) {
        this._id = id ?? v4();
        this.props = {
            ...props,
        };
        this.validate();
    }

    private validate() {
        const CPFsValid =  cpf.isValid(this.props.document);
        const CNPJIsValid =  cnpj.isValid(this.props.document);
        if (!CPFsValid && !CNPJIsValid) {
           throw new Error('Document user is invalid!');
        }
      }

    public get id(): string {
        return this._id;
      }

    get fullname() {
        return this.props.fullname;
    }

    get document() {
        return this.props.document;
    }

    get email() {
        return this.props.email;
    }

    get role() {
        return this.props.role;
    }

    get tasks() {
        return this.props.tasksId ?? [];
    }

    set fullname(value: string) {
        this.props.fullname = value;
    }

    set document(value: string) {
        this.props.document = value;
    }

    set email(value: string) {
        this.props.email = value;
    }

    set role(value: 'admin' | 'user') {
        this.props.role = value;
    }

    set tasks(value: string[]) {
        this.props.tasksId = value;
    }
}