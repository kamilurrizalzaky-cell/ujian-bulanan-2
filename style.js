function hitungTotalBelanja(DaftarBelanja) {
    let Total = 0;
    for (let item of DaftarBelanja) {
        Total += item.harga * item.jumlah;
    }
    return Total;
}

console.log(hitungTotalBelanja
    ([
  { nama: "Buku", harga: 50000, jumlah: 2 },
  { nama: "Pulpen", harga: 15000, jumlah: 3 }
])
)