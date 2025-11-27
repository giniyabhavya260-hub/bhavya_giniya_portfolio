

enum AuthScreenRedirection {
  login,
  signup,
  forgot;
}

enum ReportOptions {
  allTime('All time'),
  monthly('Monthly'),
  yearly('Yearly');

  const ReportOptions(this.value);

  final String value;
}

