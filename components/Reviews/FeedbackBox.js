
export default function FeedbackBox({ image }) {
    return (
        // <div className=' h-[400px] bg-auto bg-center bg-no-repeat ' style={{ backgroundImage: `url(${image})` }}>

        // </div>
        <div className="px-10 flex items-center justify-center">
            <img src={image} alt="img" className="" />
        </div>
    );
}
