
const Student = ({ name, age, course }) => {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-4 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{name}</h3>
        <div className="flex gap-6 text-gray-700">
          <p><span className="font-medium">Age:</span> {age}</p>
          <p><span className="font-medium">Course:</span> {course}</p>
        </div>
      </div>
    );
  };
  

  function App() {
    const students = [
      { name: "John Doe", age: 25, course: "Data Science" },
      { name: "Jane Smith", age: 23, course: "Electrical Engineering" },
      { name: "Bob Johnson", age: 24, course: "Marketing" }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              🎓 Student Directory
            </h1>
            <p className="text-center text-gray-600 mt-2">Made by Rayan Rawat</p>
          </div>
          <div>
            {students.map((student, index) => (
              <Student
                key={index}
                name={student.name}
                age={student.age}
                course={student.course}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
