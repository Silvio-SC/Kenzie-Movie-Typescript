import { Reviews } from "../../providers"
import { Assessment } from "../Assessment";

interface IDiv {
    reviewList: Reviews[] | undefined;
}

export const ReviewsSection = ({ reviewList }: IDiv) => {

    const renderReviews = () => {
        let Reviews = reviewList ? reviewList : []
        let List: any = []
        for (let i = 0; i < Reviews.length; i++) {
            const element = <Assessment id={Reviews[i].userId} description={Reviews[i].description} score={Reviews[i].score} key={'R' + Reviews[i].id}/>;
            List = [...List, element]
        }
        return List
    }
    return (
        <>
            {renderReviews()}
        </>
    )
}