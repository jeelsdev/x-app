const InfoAttachment = () => {
    const attachment = {
        backgroundImage:"url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')"
    }
  return (
        <div className="w-full h-screen bg-center bg-fixed" style={attachment}>
            <div className="h-full">
                <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.</p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default InfoAttachment;
