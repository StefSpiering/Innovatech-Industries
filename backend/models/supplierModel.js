const { createClient } = require('@supabase/supabase-js');
const { supabaseUrl, supabaseKey } = require('../config');

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
  getAllSuppliers: async () => {
    const { data, error } = await supabase.from('suppliers').select('*');
    if (error) {
      throw error;
    }
    return data;
  },
  // Implementar funciones adicionales según sea necesario
};
