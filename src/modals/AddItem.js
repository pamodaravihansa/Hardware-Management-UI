import '../CSS/style.scss';

export default function AddItemModal({open, onclose}) {
    if (!open) return null; 
    return (
        <div className='modal-bg'>
            <div className='add-item-popup'>
                <div className='add-modal-topsection' onClick={onclose}>
                    <span>Add Item</span>
                    <div className='modal-close-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <path d="M0 12H2.3368L5.19751 7.59252H5.26403L8.09148 12H10.5613L6.62786 6.03742V5.97921L10.6279 0H8.22453L5.41372 4.50728H5.34719L2.56965 0H0.033264L3.90852 5.92931V5.98753L0 12Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='add-modal-inputs'>
                    <div className='modal-input'>
                        <span>Item Name</span>
                        <input type='text' />
                    </div>
                    <div className='modal-input'>
                        <span>Category</span>
                        <select name="Dropdown">
                            <option value="Outdoor_paints">Outdoor Paints</option>
                            <option value="Floor_paints">Floor Paints</option>
                            <option value="Wood_paints">Wood Paints</option>
                            <option value="Metal_paints">Metal Paints</option>
                        </select>
                    </div>
                    <div className='modal-input'>
                        <span>Sub Category</span>
                        <select name="Dropdown">
                            <option value="Outdoor_paints">Outdoor Paints</option>
                            <option value="Floor_paints">Floor Paints</option>
                            <option value="Wood_paints">Wood Paints</option>
                            <option value="Metal_paints">Metal Paints</option>
                        </select>
                    </div>
                    <div className='modal-input'>
                        <span>Size</span>
                        <input type='text' />
                    </div>
                    <div className='modal-input'>
                        <span>Stock</span>
                        <input type='text' />
                    </div>
                    <div className='modal-input'>
                        <span>Stock</span>
                        <input type='text' className='descrip' />
                    </div>
                </div>
                <div className='add-modal-buttons'>
                    <div className='clr-btn'>
                        Clear
                    </div>
                    <div className='add-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="white" />
                        </svg>
                        Add Item
                    </div>
                </div>
            </div>
        </div>
    );
}