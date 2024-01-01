import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs"

const CardsHome = () => {
    return (
        <div>
            <Card className="h-[150px] border-gray-100">
                <CardHeader className="flex flex-row justify-between">
                    <div>
                        <CardTitle className="text-lg">356</CardTitle>
                        <CardDescription className="text-xs">Orders Received</CardDescription>
                    </div>
                    <div className="bg-green-400 rounded-full w-10 h-10 flex justify-center items-center">
                        <BsCardChecklist className="text-white text-2xl" />
                    </div>
                </CardHeader>
                <CardFooter className="bg-green-100 rounded-md flex justify-center items-center w-fit h-5 p-3 ml-6">
                    <p className="text-green-500 text-sm">10%</p>
                    <AiOutlineLineChart className="text-green-500 text-sm"/>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CardsHome