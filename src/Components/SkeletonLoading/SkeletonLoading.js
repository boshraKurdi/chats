import ChatSkeleton from "../Skeleton/ChatSkeleton";
import HeaderChatSkeleton from "../Skeleton/HeaderChatSkeleton";

export default function SkeletonLoading({loading , error ='' , children , type}){
    const typeLoading = {
        chat: ChatSkeleton ,
        headerChat: HeaderChatSkeleton
    }
    const Component = typeLoading[type];
    if (loading === 'pending') {
        return <Component />    
    }
    if (loading === 'failed') {
        return "error"
    }
    return(
        <>{children}</>
    )

}