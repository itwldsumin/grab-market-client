function ChildComponent(props) {
  const { name, age } = props; // Prop 값은 컴포넌트 함수의 첫 번째 인자에 전부 들어감. 전체 인자를 받아옴(비구조할당구조)
  return (
    <div>
      <p>
        이름은{name}이며 나이는{age}이다
      </p>
    </div>
  );
}

export default ChildComponent;
