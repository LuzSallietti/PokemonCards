import { Component } from "react";
import { Container } from "./StyledComponents";
import { Title } from "./StyledComponents";
import { OperationButton } from "./StyledComponents";

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
          };
      }
    render() {
        return <>
       <Container>
        <Title>Class Counter</Title>
        <OperationButton btnWidth='50px' btnHeight='50px' bgColor='#fff' color='grey' onClick={() => this.setState({counter: this.state.counter - 1})}>-</OperationButton>
        <OperationButton fontSize="24px">{this.state.counter}</OperationButton>
        <OperationButton btnWidth='50px' btnHeight='50px'onClick={() => this.setState({counter: this.state.counter + 1})}>+</OperationButton>
       </Container>
       </> 
      }
}

export default ClassCounter;