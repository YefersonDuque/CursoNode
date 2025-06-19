import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export const bcryptAdapter = {
    
    hash: (passrod: string) => {
        const salt = genSaltSync();
        return hashSync(passrod, salt);
    },

    compare: (password: string, hashed: string) => {
        return compareSync(password, hashed);
    }


}