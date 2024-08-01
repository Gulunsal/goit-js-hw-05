//mission 4-Total Balance by Gender
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};
//ilk önce filter metodu, users dizisini dolaşıp gender parametresi ile eşleşen cinsiyetteki kullanıcıları içeren yeni bir dizi oluşturuldu.
//sonra reduce metodu, bu dizi uzerinden toplama islemi yapıldı.


// allUsers değişkeni global olarak tanımlandığı için consol da hata aldım, bu nedenle yeniden tanımlanma yaptım. 
if (typeof allUsers === 'undefined') {
  var allUsers = [
    {
      name: "Moore Hensley",
      gender: "male",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      gender: "female",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      gender: "male",
      balance: 3793
    },
    {
      name: "Elma Head",
      gender: "female",
      balance: 2278
    },
    {
      name: "Carey Barr",
      gender: "male",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      gender: "male",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      gender: "female",
      balance: 2764
    }
  ];
}

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053
console.log(getTotalBalanceByGender(allUsers, "female")); // 8863

