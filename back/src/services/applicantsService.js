import { Applicants } from '../db';

class applicantsService {
    static create({ application }) {
        return Applicants.create({ application });
    }

    static checkOverlapping({ roomId }) {
        return Applicants.checkOverlapping({ roomId });
    }

    static delete({ applicantId, roomId }) {
        return Applicants.delete({ applicantId, roomId });
    }

    // static changeStatus({ ApplicantId, roomId, updateThing }) {
    //     return Applicants.changeStatus({ ApplicantId, roomId, updateThing });
    // }

    // static create({ newComment }) {
    //     return Comments.create({ newComment });
    // }
    // static update({ _id, updateChange }) {
    //     return Comments.update({ _id, updateChange });
    // }
    // static getAll({ roomId }) {
    //     return Comments.getAll({ roomId });
    // }
    // static getOne({ _id }) {
    //     return Comments.getOne({ _id });
    // }
    // static getOneByRoomId({ roomId }) {
    //     return Comments.getOneByRoomId({ roomId });
    // }
    // static delete({ _id }) {
    //     return Comments.delete({ _id });
    // }
}

export { applicantsService };
