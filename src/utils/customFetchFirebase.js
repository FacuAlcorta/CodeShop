import { collection, getDocs, orderBy, query, where} from "firebase/firestore";
import { db } from '../utils/customFirebase'

export const customFetchFirestore = async (categoryId) => {
    let cat;
    if (categoryId) {
        cat = query(collection(db, "products"), where('categoryId', '==', categoryId))

    } else {
        cat = query(collection(db, "products"), orderBy("categoryId"))
    }

        const querySnapshot = await getDocs(cat);
        const dataFirestore = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    return dataFirestore
}
