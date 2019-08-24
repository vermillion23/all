import csv
def csv_writer(path, fieldnames, data):
    def csv_writer(path, fieldnames, data):
      with open(path, "w", newline='') as out_file:
        writer = csv.DictWriter(out_file, delimiter=';', fieldnames=fieldnames)
        writer.writeheader()
        for row in data:
            writer.writerow(row)


