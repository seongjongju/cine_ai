import React from 'react';

const DiscoverFilmsViewPage = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    
    return (
        <div>
            
        </div>
    );
};

export default DiscoverFilmsViewPage;