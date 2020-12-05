export const people = [
    {
      id: "0",
      name: "Nicolas",
      age: 18,
      gender: "female"
    },
    {
      id: "1",
      name: "Jisu",
      age: 18,
      gender: "female"
    },
    {
      id: "2",
      name: "Japan Guy",
      age: 18,
      gender: "male"
    },
    {
      id: "3",
      name: "Daal",
      age: 18,
      gender: "male"
    },
    {
      id: "4",
      name: "JD",
      age: 18,
      gender: "male"
    },
    {
      id: "5",
      name: "moondaddi",
      age: 18,
      gender: "male"
    },
    {
      id: "6",
      name: "flynn",
      age: 18,
      gender: "male"
    },
    {
      id: "7",
      name: "MinWook",
      age: 29,
      gender: "male",
      
  },
  ];

export const getById = id => {
  const filteredPeople = people.filter(p => p.id === String(id));
  // js는 array indexoutofRange 없이 null로 알아서 리턴한다.
  // return (filteredPeople.length ? filteredPeople[0] : null)
  return filteredPeople[0]
}