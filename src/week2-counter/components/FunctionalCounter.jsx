import { useState } from "react";
import { Container } from "./StyledComponents";
import { Title } from "./StyledComponents";
import { OperationButton } from "./StyledComponents"; 


const FunctionalCounter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <Container>
            <Title>Function Counter</Title>
            <OperationButton btnWidth='50px' btnHeight='50px' bgColor='#fff' color='grey' onClick={() => setCounter(counter -1)}>-</OperationButton>
            <OperationButton fontSize="24px">{counter}</OperationButton>
            <OperationButton btnWidth='50px' btnHeight='50px' onClick={() => setCounter(counter +1)}>+</OperationButton>
        </Container>
    )

}
export default FunctionalCounter;