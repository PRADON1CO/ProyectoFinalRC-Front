
import { Col } from 'react-bootstrap';

const CardInstructor = () => {
    return (
        <Col md={5} lg={4} className="pt-2">
            <div className="text-center">
                <img 
                    src="https://images.pexels.com/photos/3756907/pexels-photo-3756907.jpeg?auto=compress&cs=tinysrgb&w=300" 
                    alt="Foto del Instructor" 
                    className="rounded-circle"
                />
                <h4 className='pt-1'>Lourdes Garcia</h4>
            </div>
        </Col>
    );
};

export default CardInstructor;