import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({filterByCategory,allCategory}) => {
    // to filter by cate
    const onFilter=(cat)=>{
        filterByCategory(cat)
    }
    return (
        <Row className='my-2 mb-5'>
            <Col sm="12" className='d-flex justify-content-center'>
                    {allCategory.length >= 1 ? (
                        allCategory.map((item)=>{
                            return(
                                <div key={Math.random()}>
                                    <button onClick={()=>onFilter(item)} style={{border:"1px solid #b45b35"}} className='btn mx-2'>{item}</button>
                                </div>
                            )
                        })
                    ) : <h3 className="text-center">لا يوجد تصينفات</h3>}
            </Col>
        </Row>
    )
}

export default Category