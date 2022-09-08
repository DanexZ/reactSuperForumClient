import Thread from "./Thread";

export default class ThreadItem {
    constructor(
        public id: string,
        public views: number,
        public points: number,
        public body: string,
        public userName: string,
        public user_id: string,
        public createdOn: Date,
        public thread_id: string
    ) {}
}