import Input from "./Input";
import Button from "./Button";


const Form = () => {
  return (
    <form id="form_area">
      <Input name={"City"} isHalf={true} showLabel={true}/>
      <Input name={"Address"} isHalf={false} showLabel={true}/>
      <Input name={"Name"} isHalf={false} showLabel={true}/>
      <Input name={"Phone"} isHalf={false} showLabel={true}/>
      <Input name={"Email"} isHalf={false} showLabel={true}/>

      <h1> Payment Method</h1>

      <div id="order_Btn">
        <Button name={"Payment Card"} isFilled={false} />
        <Button name={"Cash on Delivery"} isFilled={false} />
        <p> I agree...</p>
        <Button name={"Place an Order"} isFilled={true} />
      </div>
    </form>
  );
};


export default Form