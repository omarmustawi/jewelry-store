import '../../App.css';

export default function IntroPage(props) {
    return (
        <div className="top-0 w-100 intro-page ">
            <div className='back-layer d-flex flex-column gap-0  align-items-center  justify-content-center text-white '>
                <p> {props.sentence} </p>
                <h1 className='fw-semibold font-3xl'> {props.title} </h1>
            </div>
        </div>
    )
}