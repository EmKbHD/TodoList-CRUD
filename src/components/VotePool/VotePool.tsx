const VotePool = () => {
    return (
        <div className=" bg-red-50 flex justify-center items-center">
            <div className=" container py-14 flex flex-col justify-center ">
                <h2 className=" text-center font-bold text-2xl">
                    Votes and Pools are{' '}
                    <span className="text-red-500">
                        easy to use and secured
                    </span>
                </h2>
                <div className=" flex justify-center pt-8">
                    <div className="flex min-w-[300px] ">
                        <button className="primary-btn grow mr-4">
                            Try Free
                        </button>
                        <button className="secondary-btn bg-red-100 ">
                            Go Premium
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VotePool
