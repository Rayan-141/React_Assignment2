// Student component that accepts name, age, and course as props
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
  
  // Main component that renders a list of students
  function App() {
    const students = [
      { name: "Rahul Sharma", age: 20, course: "Computer Science" },
      { name: "Priya Patel", age: 22, course: "Mechanical Engineering" },
      { name: "Amit Kumar", age: 21, course: "Business Administration" }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              🎓 Student Directory
            </h1>
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